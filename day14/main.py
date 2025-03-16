from car_entity import Car
from car_repo import CarRepo
from datetime import date
from employee_entity import Employee
from employee_repo import EmployeeRepo

def main():
    car = Car(4, date.today(), "Honda", 
              'red', 'toyota', '1123rsr4re44d')
    car_repo = CarRepo()
    car_repo.create_table()
    car_repo.insert(car)
    print(car_repo.get_all())


main()

def main2():
    employee = Employee(1,date.today(),'Mohammad','Souri',26,500)
    employee_repo = EmployeeRepo()
    employee_repo.create_table()
    employee_repo.insert(employee)
    print(employee_repo.get_all())

main2()
