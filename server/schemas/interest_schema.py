from pydantic import BaseModel
from typing import List

class InterestSchema(BaseModel):
    interest: str