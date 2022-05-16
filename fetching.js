fetch('http://localhost:3000/')
.then(response => response.json())
.then(json =>{
  json.Sheet1.forEach(e => {
    var x = document.getElementById('tbl')
    var r = document.createElement('tr')
    var y = document.createElement('td')
    var z = document.createElement('td')
    var i = document.createElement('img')
    var i2 = document.createElement('td')
    i.src = e.C
    i.style = 'width:75px;height:75px;'
    i2.appendChild(i)
    y.innerText = e.A;
    y.style = 'font-size:300%'
    z.innerText = e.B;
    z.style = 'font-size:300%'
    x.appendChild(r)
    x.appendChild(y)
    x.appendChild(z)
    x.appendChild(i)
  })
})