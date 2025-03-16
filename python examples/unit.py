from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker

# Database connection (replace with your credentials)
DATABASE_URL = "postgresql://mohammad:password@localhost:5432/flask"

# Create engine and session factory
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

# Base class for models
Base = declarative_base()

# Define Student model
class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    grade = Column(String, nullable=False)

# Create tables
Base.metadata.create_all(engine)

# Unit of Work Functions

def add_students():
    """ Adds multiple students in a single transaction. """
    session = SessionLocal()
    try:
        student1 = Student(name="Alice", age=20, grade="A")
        student2 = Student(name="Bob", age=22, grade="B")

        session.add(student1)
        session.add(student2)  # Staged but not committed

        session.commit()  # All changes are committed together
        print("Students added successfully!")

    except Exception as e:
        session.rollback()  # Rollback if any error occurs
        print("Error occurred:", e)

    finally:
        session.close()

def update_and_delete():
    """ Updates one student and deletes another in a single transaction. """
    session = SessionLocal()
    try:
        # Fetch student with id=1
        student = session.query(Student).filter(Student.id == 1).first()
        if student:
            student.age = 21  # Update student age

        # Delete student with id=2
        student_to_delete = session.query(Student).filter(Student.id == 2).first()
        if student_to_delete:
            session.delete(student_to_delete)

        session.commit()  # Commit both update and delete together
        print("Update and delete executed successfully!")

    except Exception as e:
        session.rollback()  # Rollback if anything goes wrong
        print("Error:", e)

    finally:
        session.close()

def get_students():
    """ Fetch all students. """
    session = SessionLocal()
    students = session.query(Student).all()
    session.close()
    return students

def delete_student(student_id):
    """ Deletes a student by ID. """
    session = SessionLocal()
    try:
        student = session.query(Student).filter(Student.id == student_id).first()
        if student:
            session.delete(student)
            session.commit()
            print(f"Student {student_id} deleted successfully!")
        else:
            print(f"Student {student_id} not found.")

    except Exception as e:
        session.rollback()
        print("Error:", e)

    finally:
        session.close()

# Run functions for testing
if __name__ == "__main__":
    add_students()
    update_and_delete()
    students = get_students()
    print("Current Students:", [(s.id, s.name, s.age, s.grade) for s in students])
    delete_student(3)
