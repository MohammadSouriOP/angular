from dataclasses import dataclass
from datetime import datetime


@dataclass
class BaseEntity:
    id: int
    created_at: datetime

@dataclass
class Employee(BaseEntity):
    fname: str
    lname: str
    age: str
    salary: int
    updated_at: datetime | None = None    