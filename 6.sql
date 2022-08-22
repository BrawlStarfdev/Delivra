-- A. Return the name of the salesperson with the 3rd highest salary.
Select
    Ranked.Name
from
    (
        Select
            *,
            dense_rank() over(
                order by
                    Salary desc
            ) r
        from
            Salesperson
    ) as Ranked
where
    r = 3;

-- B. Create a new rollup table BigOrders(where columns are CustomerID, TotalOrderValue), and insert into that table customers whose total Amount across all orders is greater than 1000
Create Table BigOrders AS
Select
    Orders.CustomerId,
    Sum(Orders.CostOfUnit) as TotalOrderValue
from
    Orders
Group By
    Orders.CustomerId
Having
    Sum(Orders.CostOfUnit) >= 1000;

-- C. Return the total Amount of orders for each month, ordered by year, then month (both in descending order)
Select
    A.year,
    A.month,
    sum(A.CostOfUnit) as TotalAmount
from
    (
        Select
            substr(OrderDate, 4, 2) as month,
            substr(OrderDate, 7, 4) as year,
            CostOfUnit
        from
            Orders
    ) as A
Group by
    A.year,
    A.month
Order by
    A.year desc,
    A.month desc