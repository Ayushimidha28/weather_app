


const wf=document.querySelector('form')
const s=document.querySelector('input')
const one=document.querySelector('#m')
const two=document.querySelector('#n')
wf.addEventListener('submit',(e)=>{
    e.preventDefault()
    const l=s.value
    fetch("http://localhost:3000/weather?address="+l).then((response)=>{
    response.json().then((data)=>{ 
        if(data.error)
        console.log("Errorrrrrr")
else{
    one.textContent=data.location
    two.textContent=data.forecast
}
    })

})

    console.log("testing")  
})