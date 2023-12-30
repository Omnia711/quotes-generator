
var arrayOfQuotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'},
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'},
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'},
    {'author': 'Mae West ', 
     'quote': 'You only live once, but if you do it right, once is enough.'},
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world. '},
    {'author': 'Elbert Hubbard', 
     'quote': 'In three words I can sum up everything I\'ve learned about life\ : it goes on.'},
    {'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you don\'t have to remember anything.'},
];

function addQuote(){
    var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `- ${arrayOfQuotes[random].author}`;
    
}
