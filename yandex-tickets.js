/*
    Дан массив билетов. Он не упорядочен. Нужно вернуть массив билетов в порядке передвижения по маршруту. Петель и циклов нет.
*/

const TICKETS = [	
  {from: 'Vancuver', to: 'Moscow'},
  {from: 'Berlin', to: 'London'},
  {from: 'London', to: 'Vancuver'},
  {from: 'NY', to: 'Berlin'},  
]


function orderTickets(tickets) {
	if (!tickets || tickets?.length < 2)
  	    return tickets
    
  const fromMap = new Map(), toMap = new Map(), {length} = tickets
  let startCity

  for (const ticket of tickets) {
  	const {from, to} = ticket
    
    fromMap.set(from, ticket)
    toMap.set(to, ticket)

    if (startCity === undefined || toMap.has(startCity))
        startCity = from
  }
  
  const result = new Array(length)

  for (let i = 0; i < length; ++i) {
  	const ticket = fromMap.get(startCity)
  	result[i] = ticket
    startCity = ticket.to
  }
  
  return result
}

console.log(orderTickets([]))
console.log(orderTickets(TICKETS))
