var output=document.getElementById("output");
var quotes=[
`
<img src="images/1.jpg"/>
<p>Be yourself; everyone else is already taken.</p>
<h5>--Oscar Wilde--</h5>
`,
`<img src="images/2.jpg"/>
<p>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</p>
<h5>--Albert Einstein--</h5>
`,
`<img src="images/3.jpg"/>
<p>So many books, so little time.</p>
<h5>--Frank Zappa--</h5>
`,
`<img src="images/4.jpg"/>
<p>A room without books is like a body without a soul.</p>
<h5>--Marcus Tullius Cicero--</h5>
`,
`<img src="images/5.jpg"/>
<p>Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.</p>
<h5>--Bernard M. Baruch--</h5>
`,
`<img src="images/6.jpg"/>
<p>You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.</p>
<h5>--William W. Purkey--</h5>
`,
`<img src="images/8.jpg"/>
<p>You only live once, but if you do it right, once is enough.</p>
<h5>--Mae West--</h5>
`,
`<img src="images/9.jpg"/>
<p>Be the change that you wish to see in the world.</p>
<h5>--Mahatma Gandhi--</h5>
`,
`<img src="images/10.jpg"/>
<p>In three words I can sum up everything I've learned about life: it goes on.</p>
<h5>-- Robert Frost--</h5>
`,
`<img src="images/11.jpg"/>
<p>If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.</p>
<h5>-- J.K. Rowling, Harry Potter and the Goblet of Fire--</h5>
`,
`<img src="images/12.jpg"/>
<p>Dont walk in front of me.I may not follow Dont walk behind me.I may not leadWalk beside me.just be my friend.</p>
<h5>--Albert Camus--</h5>
`,
`<img src="images/13.jpg"/>
<p>If you tell the truth, you don't have to remember anything.</p>
<h5>--Mark Twain--</h5>
`,
`<img src="images/14.jpg"/>
<p>I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.</p>
<h5>--Maya Angelou--</h5>
`,
`<img src="images/15.jpg"/>
<p>A friend is someone who knows all about you and still loves you.</p>
<h5>--Elbert Hubbard--</h5>
`]
var currentRandomNumber = -1;

function randQuote(){
    var newRandomNumber;
     while (true) {
        newRandomNumber = Math.floor(Math.random() * quotes.length);
           if (newRandomNumber !== currentRandomNumber) {
            break; 
        }
     }
 currentRandomNumber = newRandomNumber;
 var randQuote = quotes[currentRandomNumber];
 output.innerHTML=randQuote;
}