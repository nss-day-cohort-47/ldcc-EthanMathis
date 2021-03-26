# DBDiagram Starter Script

Copy the following into the left panel on DBDiagram. Complete the relationships and share with the instruction team.

```
Table snacks {
  id int [pk] // auto-increment
  name varchar
  snackImg varchar
  count int
  typeId int
  shapeId int
  inFlavorId int
  seasonId int
  description varchar
  toppings varchar
}
 
//each snack has one season
//be sure to include one for everyday
Table seasons {
  id int [pk]
  name varchar
  start_date date
  end_date date
}

//each snack has one inside flavor
//chocolate, vanilla, strawberry, peanut butter
Table inFlavors {
  id int [pk]
  name varchar
}

//each snack has one shape
//tree, square, roll
Table shapes {
  id int [pk]
  name varchar
}

//each snack is of one type
//cake, brownie, creme roll, etc
Table types {
  id int [pk]
  name varchar
}

//some users are administrators
Table users {
  id int [pk]
  name varchar
  email varchar
  isAdmin boolean
}
```
