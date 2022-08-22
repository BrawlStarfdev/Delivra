-- A. Return the names of all salespeople that have an order with George
Select
    Salesperson.Name
from
    Salesperson
    Left join Orders on Salesperson.SalespersonID = Orders.SalespersonID
    Left join Customer on Customer.CustomerId = Orders.CustomerId
Where
    Customer.Name = "George"
Group By
    Salesperson.SalespersonID;

-- B. Return the names of all salespeople that do not have any order with George
Select
    Salesperson.Name
from
    Salesperson
    Left join Orders on Salesperson.SalespersonID = Orders.SalespersonID
    Left join Customer on Customer.CustomerId = Orders.CustomerId
Where
    Customer.Name != "George"
Group By
    Salesperson.SalespersonID;

-- C. Return the names of salespeople that have 2 or more orders.
Select
    Salesperson.Name
from
    Salesperson
    Left join Orders on Salesperson.SalespersonID = Orders.SalespersonID
Group By
    Orders.SalespersonID
Having
    Count(Orders.SalespersonId) > 1;