      var currentDate = new Date();
      var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
      var day = ("0" + currentDate.getDate()).slice(-2);
      var fullDate =  month + "-" + day;

 const dataProjects=[
    {title:' Pokemon Game',type:'vue', date: fullDate, img: null, link: 'https://genshin-game-quest-by-xavis-code.netlify.app', completed: 'completed'},
    {title:' Pokemon Quizz',type:'vue', date: fullDate, img: null, link: 'https://vue-app-pokemon.netlify.app',completed: 'completed'},
    {title:' Anterior web',type:'vue', date: fullDate, img: null, link: 'https://portafolios-f6ff3.firebaseapp.com/', completed: 'soon'},
    
]

export default dataProjects;