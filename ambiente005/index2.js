function externa() {
  let saudacao = "Olá";

  function interna() {
    console.log(saudacao)
  }

  return interna
}

const fn = externa()
fn()