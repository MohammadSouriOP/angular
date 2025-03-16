import sqlite3
from typing import Generic, TypeVar, Any, Type
from car_entity import BaseEntity
from employee_entity import BaseEntity

E = TypeVar('E', bound='BaseEntity')


class BaseRepo(Generic[E]):
    def __init__(self, table_name: str, entity: Type[E]) -> None:
        self.conn = sqlite3.connect('mydatabase.db')
        self.cursor = self.conn.cursor() 
        self.entity = entity
        self.table_name = table_name

    def insert(self, entity: E) -> E:
        columns = ', '.join(entity.__dict__.keys())
        values = tuple(entity.__dict__.values())
        placeholders = ', '.join('?' * len(values))  
        query = f'INSERT INTO {self.table_name} ({columns}) VALUES ({placeholders}) RETURNING *'
        self.cursor.execute(query, values)
        self.conn.commit()
        return entity

    def get_all(self) -> list[E]:
        query = f"SELECT * FROM {self.table_name}"
        self.cursor.execute(query)
        rows = self.cursor.fetchall()
        entities = [self.entity(*row) for row in rows] 
        return entities

    def get(self, id: int) -> E:
        query = f"SELECT * FROM {self.table_name} WHERE id = ?"
        self.cursor.execute(query, (id,))
        row = self.cursor.fetchone()
        if row:
            return self.entity(*row)  # Assuming the entity constructor matches the row structure
        else:
            raise ValueError(f"{self.entity.__name__} with ID {id} not found")

    def update(self, id: int, data: dict[str, Any]) -> E:
        set_clause = ', '.join([f"{key} = ?" for key in data.keys()])
        values = tuple(data.values()) + (id,)
        query = f"UPDATE {self.table_name} SET {set_clause} WHERE id = ?"
        self.cursor.execute(query, values)
        self.conn.commit()
        return self.get(id)  # To return the updated entity

    def delete(self, id: int) -> None:
        query = f"DELETE FROM {self.table_name} WHERE id = ?"
        self.cursor.execute(query, (id,))
        self.conn.commit()