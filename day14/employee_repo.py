from base_repo import BaseRepo
from employee_entity import Employee


class EmployeeRepo(BaseRepo[Employee]):
    def __init__(self) -> None:
        self.table_name = 'EMPLOYEE'
        super().__init__(self.table_name, Employee)
# constructur baserepo
    def create_table(self):
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS EMPLOYEE (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            fname TEXT NOT NULL,
            lname TEXT NOT NULL,
            age INTEGER NOT NULL,
            salary INTEGER NOT NULL,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        """)
        self.conn.commit()
        # self.conn.close()
