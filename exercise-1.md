# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of what it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint                   | method   | Description                                          |
| -------------------------- | -------- | ---------------------------------------------------- |
| `/test`                    | `GET`    | It is a test endpoint.                               |
| `*`                        | `GET`    | 404, Nothing here.                                   |
| `/menu`                    | `GET`    | Returns a list of menu items                         |
| `/menu`                    | `PUT`    | Updates menu items                                   |
| `/menu/:item`              | `GET`    | Returns a specific menu item                         |
| `/order/:id`               | `POST`   | Create a new order with item(s)                      |
| `/order/:id`               | `PUT`    | Updates an order with item(s)                        |
| `/order/:id`               | `DELETE` | Delets an order                                      |
| `/order/:id`               | `GET`    | Return a specific order                              |
| `/order`                   | `GET`    | Returns all orders                                   |
| `/order/:id/status`        | `GET`    | Returns status of a specific order                   |
| `/order/:id/status`        | `PUT`    | Updates status of a specific order                   |
| `/customer`                | `GET`    | Returns all customers                                |
| `/customer/:id`            | `POST`   | Create new customer                                  |
| `/customer/:id`            | `GET`    | Returns infos for a specific customer                |
| `/customer/:id`            | `PUT`    | Updates customer's info                              |
| `/customer/:id`            | `DELETE` | Deletes customer                                     |
| `/customer/:id/orders`     | `GET`    | Returns the order list for a customer                |
| `/stock`                   | `GET`    | Returns in-stock items                               |
| `/stock/:id`               | `POST`   | Updates stock for a specific item                    |
| `/stock/:id`               | `GET`    | Returns stock for a specific item                    |
| `/stock/:id`               | `DELETE` | Deletes entry for specific item in stock             |
| `/stock/:id`               | `PUT`    | Updates entry for specific item in stock             |
| `/seating`                 | `GET`    | Returns seating in restaurant                        |
| `/seating/:id`             | `POST`   | Creates new seating in restaurant                    |
| `/seating/:id`             | `DELETE` | Deletes seating in restaurant                        |
| `/seating/:id`             | `PUT`    | Updates seating (ex: seats per table) in restaurant  |
| `/customer/:id/:seatingid` | `POST`   | Creates new customer's seating in restaurant         |
| `/customer/:id/:seatingid` | `GET`    | Returns customer's seating in restaurant             |
| `/customer/:id/:seatingid` | `PUT`    | Updates customer's seating in restaurant             |
| `/customer/:id/:seatingid` | `DELETE` | Returns customer's seating in restaurant             |
| `/employees`               | `GET`    | Returns employees working in restaurant              |
| `/employees/:id`           | `POST`   | Creates new employee working in restaurant           |
| `/employees/:id`           | `GET`    | Returns specific employee working in restaurant      |
| `/employees/:id`           | `PUT`    | Updates specific employee info working in restaurant |
| `/employees/:id`           | `DELETE` | Deletes specific employee info                       |
| `/employees/:id/isworking` | `GET`    | Returns specific employee info : is working or not   |
| `/employees/isworking`     | `GET`    | Returns all employee info (list) : is working or not |
| `/employees/:id/isworking` | `PUT`    | Updates employee info : is working or not            |
