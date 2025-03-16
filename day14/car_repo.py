from base_repo import BaseRepo
from car_entity import Car


class CarRepo(BaseRepo[Car]):
    def __init__(self) -> None:
        self.table_name = 'CARS'
        super().__init__(self.table_name, Car)
# constructur baserepo
    def create_table(self):
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS CARS (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            model TEXT NOT NULL,
            color TEXT NOT NULL,
            brand TEXT NOT NULL,
            vin_num TEXT NOT NULL UNIQUE,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        """)
        self.conn.commit()
        # self.conn.close()
