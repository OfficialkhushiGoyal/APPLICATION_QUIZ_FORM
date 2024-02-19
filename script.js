const questions = [
    {
        'que': 'The values GET, POST, HEAD, etc are specified in ____ of HTTP message',
        'a' : 'Request line',
        'b' : 'header line ',
        'c' : 'Entity Line ',
        'd' :  'Status line',
        'correct' : 'a'

    },

    {
        'que' : '_____ is not a web page editor',
        'a' : ' Adobe Pagemaker',
        'b' : ' MS Frontpage ',
        'c' : ' Netscape Navigator',
        'd' :  'Netscape composer',
        'correct' : 'c'

    },

    {
        'que' : ' Which HTML tag is used to define an internal style sheet?',
        'a' : '  <script>',
        'b' : ' <css> ',
        'c' : ' <style>',
        'd' :  '<none>',
        'correct' : 'c'

    },
    
    {
        'que' : ' What is the correct HTML for creating a hyperlink?',
        'a' : '  <a name="">A</a> ',
        'b' : '  <a>B</a> ',
        'c' : '  <a href="http://www.example.com">example</a>',
        'd' :  '  <a url="http://www.example.com">example</a>      ',
        'correct' : 'c'

    },
]


let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
    
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestions = () => {
    if(index===total){
       return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${ index+1}) ${ data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
 const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
 }

 const getAnswer= () =>{
    let answer;
    optionInputs.forEach(
        (input ) => {
            if (input.checked){
                answer= input.value;
            
            }

        }
    )
    return answer;
 }

const reset= () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}
const endQuiz= () =>{
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3> Thank You For Playing The Quiz </h3>
    <h2> ${right}/${total} are correct </h2>
    </div>
    
    `
}

loadQuestions();