const users = [
  {id: 1},
  {id: 2},
  {id: 3}
]

for(const {id} of users) {

}

const user = { id: 0, username: 'jeff'}

function haveFun({id, username}) {
  console.log(`Hi ${username}`)
}

haveFun(user);