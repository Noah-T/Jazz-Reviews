$("form :input").attr("autocomplete", "off");

function eachWord(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$( ".first_name" ).keyup(function() {
    first_name = $( this ).val();
    console.log(first_name); 
    full_name = first_name + " " + last_name;  
  })

$( ".last_name" ).keyup(function() {
    last_name = $( this ).val();
    console.log(last_name); 
    full_name = first_name + " " + last_name; 
  })


$( ".birthplace_city" ).keyup(function() {
    birthplace_city = $( this ).val();
    console.log(birthplace_city);  
  })

$( ".workplace_city" ).keyup(function() {
    workplace_city = $( this ).val();
    console.log(workplace_city);  
  })

$( ".gender" ).click(function() {
    if ($( this ).val() == "male") {
    	gender1 = "himself";
      gender2 = "His";
      gender3 = "He";
      gender4 = "him";
    } else {
    	gender1 = "herself";
      gender2 = "Her"
      gender3 = "She";
      gender4= "her";
    }
    console.log(gender1);  
  })

$( ".birth_year" ).change(function() {
    birth_year = $( this ).val();
    console.log(birth_year);  
  })

$( ".instrumentation" ).change(function() {
    instrumentation = $( this ).val().toLowerCase();
    console.log(instrumentation);  
  })

$( ".notable_collaborators" ).change(function() {
    notable_collaborators = $( this ).val();
    console.log(notable_collaborators);  
  })

$( ".instrument" ).change(function() {
    instrument = $( this ).val();
    console.log(instrument); 

  generateASoundAdjective = function(instrument) {
  
  fluteAdjectives = {
    soundTone: ["luminous", "brilliant", "spacious", "supple", "incandescent"]
  }

  clarinetAdjectives = {
    soundTone: ["mellow", "refined", "buttery", "luminous", "translucent", "rich"]
  }

  saxophoneAdjectives = {
  soundTone: ["muscular", "supple", "lush", "brawny", "burnished-copper"]
  }

  trumpetAdjectives = {
    soundTone: ["brassy", "muscular", "supple", "burnished-copper", "warm", "leonine", "crisp"]
  }
  
  tromboneAdjectives = {
    soundTone: ["mellow", "refined", "buttery", "golden", "brassy", "burly", "warm"]
  }

  violinAdjectives = {
   soundTone: ["luminous", "brilliant", "spacious", "supple", "incandescent"] 
  }

  guitarAdjectives = {
    soundTone: ["lean", "compact", "refined"]
  }

  bassAdjectives = { 
    soundTone: ["muscular", "lean", "woody", "rough-hewn", "spacious"]
}
  pianoAdjectives = {
    soundTone: ["supple", "smooth"]
  }

  drumsAdjectives = {
    soundTone: ["polyrhythmic", "sparse", "intricate", "pyrotechnic", "ferocious", "coloristic"]
  }

  voiceAdjectives = {
    soundTone: ["wispy", "supple", "sultry", "full-bodied", "haunting", "sandpapery", "exquisite"]
  }



  if (instrument == "flutist") {
    if (Math.random() < 0.2) {
      return fluteAdjectives.soundTone[0];
    } else if (Math.random() < 0.4) {
      return fluteAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.6) {
      return fluteAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.8) {
      return fluteAdjectives.soundTone[3];
      }
      else {
        return fluteAdjectives.soundTone[4];
      }
  }

  if (instrument == "clarinetist") {
    if (Math.random() < 0.2) {
      return clarinetAdjectives.soundTone[0];
    } else if (Math.random() < 0.4) {
      return clarinetAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.6) {
      return clarinetAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.8) {
      return clarinetAdjectives.soundTone[3];
      }
      else if (Math.random() < 0.9) {
        return clarinetAdjectives.soundTone[4];
      }
      else {
        return clarinetAdjectives.soundTone[5];
      }
  }

  if (instrument == "saxophonist") {
    if (Math.random() < 0.2) {
      return saxophoneAdjectives.soundTone[0];
    } else if (Math.random() < 0.4) {
      return saxophoneAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.6) {
      return saxophoneAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.8) {
      return saxophoneAdjectives.soundTone[3];
      } else if (Math.random() < 1){
        return saxophoneAdjectives.soundTone[4];
      }
  }

  if (instrument == "trumpeter") {
    if (Math.random() < 0.14) {
      return trumpetAdjectives.soundTone[0];
    } else if (Math.random() < 0.28) {
      return trumpetAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.42) {
      return trumpetAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.56) {
      return trumpetAdjectives.soundTone[3];
      } else if (Math.random() < 0.7) {
        return trumpetAdjectives.soundTone[4];
      } else if (Math.random()< 0.84){
        return trumpetAdjectives.soundTone[5];
      } else if (Math.random() < 1) {
        return trumpetAdjectives.soundTone[6];
      }
  }

  if (instrument == "trombonist") {
    if (Math.random() < 0.14) {
      return tromboneAdjectives.soundTone[0];
    } else if (Math.random() < 0.28) {
      return tromboneAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.42) {
      return tromboneAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.56) {
      return tromboneAdjectives.soundTone[3];
      } else if (Math.random()<0.7){
        return tromboneAdjectives.soundTone[4];
      } else if (Math.random()<0.84){
        return tromboneAdjectives.soundTone[5];
      } else if (Math.random()<1){
        return tromboneAdjectives.soundTone[6];
      }
  }

  if (instrument == "violinist") {
    if (Math.random() < 0.2) {
      return violinAdjectives.soundTone[0];
    } else if (Math.random() < 0.4) {
      return violinAdjectives.soundTone[1];
    } else if (Math.random() < 0.6) {
      return violinAdjectives.soundTone[2];
      } else if(Math.random() < 0.8) {
      return violinAdjectives.soundTone[3];
      } else {
        return violinAdjectives.soundTone[4];
      }
  }

  if (instrument == "guitarist") {
    if (Math.random() < 0.33) {
      return guitarAdjectives.soundTone[0];
    } else if (Math.random() < 0.66) {
      return guitarAdjectives.soundTone[1];
      
    } else {
      return guitarAdjectives.soundTone[2];
      }
    } 
  

  if (instrument == "bassist") {
    if (Math.random() < 0.2) {
      return bassAdjectives.soundTone[0];
    } else if (Math.random() < 0.4) {
      return bassAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.6) {
      return bassAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.8) {
      return bassAdjectives.soundTone[3];
      } else if(Math.random()<1) {
        return bassAdjectives.soundTone[4];
      }
  }

  if (instrument == "pianist") {
    if (Math.random() < 0.5) {
      return pianoAdjectives.soundTone[0];
    } else {
      return pianoAdjectives.soundTone[1];
    }
}
  if (instrument == "drummer") {
    if (Math.random() < 0.2) {
      return drumsAdjectives.soundTone[0];
    } else if (Math.random() < 0.4) {
      return drumsAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.6) {
      return drumsAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.8) {
      return drumsAdjectives.soundTone[3];
      }
      else if (Math.random() < 0.9) {
        return drumsAdjectives.soundTone[4];
      }
      else {
        return drumsAdjectives.soundTone[5];
      }
  }
  if (instrument == "vocalist") {
    if (Math.random() < 0.14) {
      return voiceAdjectives.soundTone[0];
    } else if (Math.random() < 0.28) {
      return voiceAdjectives.soundTone[1];
      
    } else if (Math.random() < 0.42) {
      return voiceAdjectives.soundTone[2];
      
    } else if (Math.random() < 0.56) {
      return voiceAdjectives.soundTone[3];
      }
      else if (Math.random() < 0.7) {
        return voiceAdjectives.soundTone[4];
      }
      else if (Math.random() < 0.84) {
        return voiceAdjectives.soundTone[5];
      } else {
        return voiceAdjectives.soundTone[6];
      }
  }
  }
})

var generateAnImprovisationAdjective = function(randomNum) {
  fluteImprovStyle=["birdlike", "agile", "dazzling", "fleet-fingered", "organic", "acrobatic", "nimble", "avian"];
  clarinetImprovStyle=["self-assured", "organic", "angular"];
  saxImprovStyle= ["self-assured", "fleet-fingered", "angular", "acrobatic", "Breckerish", "organic", "agile", "fluid"];
  trumpetImprovStyle=["jagged", "fiery", "agile", "organic", "abstract", "self-assured", "whirlwind"];
  tromboneImprovStyle=["agile", "raucous", "inventive", "self-assured", "organic"];
  violinImprovStyle=["agile", "organic", "acrobatic", "nimble"];
  guitarImprovStyle=["agile", "inventive", "self-assured", "organic", "angular", "mellifluous"];
  bassImprovStyle=["skittering", "angular", "organic", "economical", "agile", "jagged"];
  pianoImprovStyle=["serpentine", "agile", "dazzling", "fleet-fingered", "organic", "acrobatic", "nimble"];
  drumImprovStyle=["polyrhythmic", "sparse", "intricate", "pyrotechnic", "ferocious", "coloristic"];
  vocalImprovStyle=["self-assured", "angular", "organic", "agile", "fluid", "economical"]; 
  if(instrument=="flutist"){
    if (randomNum < 0.125){
      return fluteImprovStyle[0];
    } else if (randomNum < 0.25) {
      return fluteImprovStyle[1];
      } else if (randomNum < 0.375) {
      return fluteImprovStyle[2];
      } else if (randomNum < 0.5) {
      return fluteImprovStyle[3];
      } else if(randomNum < 0.625) {
        return fluteImprovStyle[4];
      } else if(randomNum < 0.75){
        return fluteImprovStyle[5];
      } else if(randomNum < 0.875){
        return fluteImprovStyle[6];
      } else if (randomNum < 1){
        return fluteImprovStyle[7];
      }

  }
  if(instrument=="clarinetist") {

    if (randomNum < 0.33){
      return clarinetImprovStyle[0];
    } else if (randomNum < 0.66) {
      return clarinetImprovStyle[1];
      } else if (randomNum < 1) {
      return clarinetImprovStyle[2];
      }
    }

  if(instrument=="saxophonist") {

    if (randomNum < 0.125){
      return saxImprovStyle[0];
    } else if (randomNum < 0.25) {
      return saxImprovStyle[1];
      } else if (randomNum < 0.375) {
      return saxImprovStyle[2];
      } else if (randomNum < 0.5) {
      return saxImprovStyle[3];
      } else if(randomNum < 0.625) {
        return saxImprovStyle[4];
      } else if(randomNum < 0.75){
        return saxImprovStyle[5];
      } else if(randomNum < 0.875){
        return saxImprovStyle[6];
      } else if (randomNum < 1){
        return saxImprovStyle[7];
      }
    }

  if(instrument=="trumpeter"){
    if(randomNum < 0.14){
     return trumpetImprovStyle[0];
  } else if(randomNum< 0.28) {
   return trumpetImprovStyle[1];
  } else if(randomNum<0.42){
    return trumpetImprovStyle[2];
  } else if(randomNum<0.56){
    return trumpetImprovStyle[3];
  } else if(randomNum<0.70) {
    return trumpetImprovStyle[4];
  } else if(randomNum<0.84){
    return trumpetImprovStyle[5];
  } else if(randomNum<1){
    return trumpetImprovStyle[6];
  }
} 

if(instrument=="trombonist"){
  if (randomNum < 0.2){
      return tromboneImprovStyle[0];
    } else if (randomNum < 0.4) {
      return tromboneImprovStyle[1];
      } else if (randomNum < 0.6) {
      return tromboneImprovStyle[2];
      } else if(randomNum < 0.8){
      return tromboneImprovStyle[3];
    } else if(randomNum < 1) {
      return tromboneImprovStyle[4];
    }
    
}

if(instrument=="violinist"){
  if (randomNum < 0.25){
      return violinImprovStyle[0];
    } else if (randomNum < 0.5) {
      return violinImprovStyle[1];
      } else if (randomNum < 0.75) {
      return violinImprovStyle[2];
      } else if (randomNum <1){
        return violinImprovStyle[3];
      }
}

if(instrument=="guitarist"){
  if(randomNum < 0.16){
    return guitarImprovStyle[0];
  }else if (randomNum < 0.32){
    return guitarImprovStyle[1];
  } else if(randomNum<0.48){
    return guitarImprovStyle[2];
  } else if(randomNum<0.64){
    return guitarImprovStyle[3];
  } else if(randomNum<0.8){
    return guitarImprovStyle[4];
  } else if (randomNum < 1){
    return guitarImprovStyle[5];
  }
}

if(instrument=="bassist"){
  if(randomNum < 0.16){
    return bassImprovStyle[0];
  }else if (randomNum < 0.32){
    return bassImprovStyle[1];
  } else if(randomNum<0.48){
    return bassImprovStyle[2];
  } else if(randomNum<0.64){
    return bassImprovStyle[3];
  } else if(randomNum<0.8){
    return bassImprovStyle[4];
  } else if (randomNum < 1){
    return bassImprovStyle[5];
  }
}

if(instrument=="pianist"){
  if(randomNum < 0.14){
     return pianoImprovStyle[0];
  } else if(randomNum< 0.28) {
   return pianoImprovStyle[1];
  } else if(randomNum<0.42){
    return pianoImprovStyle[2];
  } else if(randomNum<0.56){
    return pianoImprovStyle[3];
  } else if(randomNum<0.70) {
    return pianoImprovStyle[4];
  } else if(randomNum<0.84){
    return pianoImprovStyle[5];
  } else if(randomNum<1){
    return pianoImprovStyle[6];
  }
}

if(instrument=="drummer"){
  if(randomNum < 0.16){
    return drumImprovStyle[0];
  }else if (randomNum < 0.32){
    return drumImprovStyle[1];
  } else if(randomNum<0.48){
    return drumImprovStyle[2];
  } else if(randomNum<0.64){
    return drumImprovStyle[3];
  } else if(randomNum<0.8){
    return drumImprovStyle[4];
  } else if (randomNum < 1){
    return drumImprovStyle[5];
  }
}

if(instrument=="vocalist"){
  if(randomNum < 0.16){
    return vocalImprovStyle[0];
  }else if (randomNum < 0.32){
    return vocalImprovStyle[1];
  } else if(randomNum<0.48){
    return vocalImprovStyle[2];
  } else if(randomNum<0.64){
    return vocalImprovStyle[3];
  } else if(randomNum<0.8){
    return vocalImprovStyle[4];
  } else if (randomNum < 1){
    return vocalImprovStyle[5];
  }
}
  
}
 

var generateAnAlbumName = function(randomNum1, randomNum2) {
  title1 = ["Upward", "Downward", "Forward", "Progressive", "Overarching", "Collective"];
  title2 = ["Speculation", "Motion", "Energy", "Force", "Achievement", "Applause", "Development"];
  if(randomNum1 < 0.16){
     firstTitle = title1[0];
  } else if(randomNum1< 0.32) {
   firstTitle = title1[1];
  } else if(randomNum1<0.48){
    firstTitle = title1[2];
  } else if(randomNum1<0.64){
    firstTitle = title1[3];
  } else if(randomNum1<0.80) {
    firstTitle = title1[4];
  } else if(randomNum1<1){
    firstTitle = title1[5];
  }

  if(randomNum2 < 0.14){
     secondTitle = title2[0];
  } else if(randomNum2< 0.28) {
   secondTitle = title2[1];
  } else if(randomNum2<0.42){
    secondTitle = title2[2];
  } else if(randomNum2<0.56){
    secondTitle = title2[3];
  } else if(randomNum1<0.70) {
    secondTitle = title2[4];
  } else if(randomNum1<0.84){
    secondTitle = title2[5];
  } else if(randomNum2<1){
    secondTitle = title2[6];
  }

}

generateAnAlbumName(Math.random(),Math.random());

var generateASeason= function(randomNum){
  seasonList = ["spring", "summer", "fall", "winter"];
  if(randomNum<0.25){
    season = seasonList[0];
  } else if(randomNum<0.5){
    season = seasonList[1];
  } else if(randomNum<0.75){
    season = seasonList[2];
  } else if(randomNum<1){
    season = seasonList[3];
  }
}

generateASeason(Math.random());

var generateAJazzStyle = function(randomNum){
  jazzStyleList = ["acid jazz", "post-bop", "neo-bop", "Latin jazz", "chamber jazz", "free jazz", "third stream"];

  if(randomNum < 0.14){
     jazzStyle = jazzStyleList[0];
  } else if(randomNum< 0.28) {
   jazzStyle = jazzStyleList[1];
  } else if(randomNum<0.42){
    jazzStyle = jazzStyleList[2];
  } else if(randomNum<0.56){
    jazzStyle = jazzStyleList[3];
  } else if(randomNum<0.70) {
    jazzStyle = jazzStyleList[4];
  } else if(randomNum<0.84){
    jazzStyle = jazzStyleList[5];
  } else if(randomNum<2){
    jazzStyle = jazzStyleList[6];
  }
}
generateAJazzStyle(Math.random());

var generateYoungLion = function(instrument, randomNum){
  flutistStatus = ["young lion", "jazz ace", "jazz wizard", "jazz titan"];
  clarinetistStatus = ["reedist", "young lion", "jazz ace", "jazz wizard", "jazz titan"];
  saxophonistStatus = ["jazz titan", "reedist", "young lion", "jazz ace"];
  trumpeterTrombonistStatus = ["brass baller", "jazz ace", "jazz wizard", "young lion"];
  violinGuitarBassPianoDrumsStatus = ["jazz ace", "jazz wizard", "young lion", "jazz titan"];
  vocalistStatus = ["chanteuse", "songstress", "jazz ace","troubadour", "jazz ace"];
  if(instrument=="flutist"){
    if(randomNum<0.25){
      return flutistStatus[0];
    } else if(randomNum<0.5){
      return flutistStatus[1];
    } else if(randomNum<0.75){
      return flutistStatus[2];
    } else if(randomNum<1){
      return flutistStatus[3];
    }
}
  if(instrument=="clarinetist"){
    if(randomNum<0.2){
      return clarinetistStatus[0];
    } else if(randomNum<0.4){
      return clarinetistStatus[1];
    } else if(randomNum<0.6){
      return clarinetistStatus[2];
    } else if(randomNum<0.8){
      return clarinetistStatus[3];
    } else if(randomNum<1){
      return clarinetistStatus[4];
    }
  }

  if(instrument=="saxophonist"){
    if(randomNum<0.25){
      return saxophonistStatus[0];
    } else if(randomNum<0.5){
      return saxophonistStatus[1];
    } else if(randomNum<0.75){
      return saxophonistStatus[2];
    } else if(randomNum<1){
      return saxophonistStatus[3];
    }
  }

  if(instrument=="trumpeter"||instrument=="trombonist"){
   if(randomNum<0.25){
      return trumpeterTrombonistStatus[0];
    } else if(randomNum<0.5){
      return trumpeterTrombonistStatus[1];
    } else if(randomNum<0.75){
      return trumpeterTrombonistStatus[2];
    } else if(randomNum<1){
      return trumpeterTrombonistStatus[3];
    } 
  }

  if(instrument=="violinist"||instrument=="guitarist"||instrument=="bassist"||instrument=="pianist"||instrument=="drummer"){
    if(randomNum<0.25){
      return violinGuitarBassPianoDrumsStatus[0];
    } else if(randomNum<0.5){
      return violinGuitarBassPianoDrumsStatus[1];
    } else if(randomNum<0.75){
      return violinGuitarBassPianoDrumsStatus[2];
    } else if(randomNum<1){
      return violinGuitarBassPianoDrumsStatus[3];
    }
  }

  if(instrument=="vocalist"&&gender1=="himself"){
    if(randomNum<0.5){
      return vocalistStatus[3];
    } else {
      return vocalistStatus[4];
    }
  }
  if(instrument=="vocalist"&&gender1=="herself"){
    if(randomNum<0.33){
      return vocalistStatus[0];
    } else if(randomNum<0.66) {
      return vocalistStatus[1];
    } else {
      return vocalistStatus[2];
    }
  }
}

var generateDate = function(){
  var todaysDate = new Date();
  var todaysYearDate = todaysDate.getFullYear();
  if(Math.random()<0.33){
    return todaysYearDate + 1;
  } else if (Math.random()<0.66) {
    return todaysYearDate + 2;
  } else {
    return todaysYearDate + 3;
  }
  

}

generateDate();

$(".collaborator1").keyup(function(){
  collaborator1 = eachWord($(this).val());
})

$(".collaborator2").keyup(function(){
  collaborator2 = eachWord($(this).val());
})

$(".collaborator3").keyup(function(){
  collaborator3 = eachWord($(this).val());
})

$(".favoriteJazzMusician").keyup(function(){
  favoriteJazzMusician = eachWord($(this).val());
})







$("button").click(function(){



var accliamOrPraise = function(randomNum) {
  if (randomNum < 0.5) {
    return "acclaim";
  } else {
    return "praise";
  }
}


  if (typeof full_name != "string" || typeof gender1 != "string" || typeof instrument != "string" || typeof workplace_city != "string" || typeof instrumentation != "string" || typeof collaborator1 != "string" || typeof collaborator2 != "string" || typeof collaborator3 != "string" || typeof favoriteJazzMusician != "string") {
    alert("Please fill out all fields");
    return;
  } else if(instrument=="drummer") {
    $(".artist_bio").append(full_name + " has established " + gender1 + " as an in-demand " + instrument + ", recording and touring with a veritable \"who's who\" of jazz. " 
      + last_name + "'s " + generateASoundAdjective(instrument) + " approach to drumming renders "+ gender4 + " as a versatile, no-nonsense musician. " 
      + gender2 + " debut album, \"" + firstTitle + " " + secondTitle + ",\" established the " + instrument + " as an up-and-coming " + generateYoungLion(instrument,Math.random()) + " with chops to spare, displaying a sure sense of swing and fine instinct for restraint.", "<br><br>", "In addition to " + gender2.toLowerCase() + " work as a leader, " + first_name + " collaborates frequently with " + collaborator1 + ", " + collaborator2 + ", and " + collaborator3 + ". " +gender3+ " performs regularly in the greater " + workplace_city + " area with " + gender2.toLowerCase() + " " + jazzStyle + " " + instrumentation +", among other projects. Currently, " + gender3 + " is currently working on a " + favoriteJazzMusician + " tribute album to be released in the " + season + " of " + generateDate() + "." + "<button class='btn-primary refresh'>Create Another Biography</button>");
    $(".create_bio").hide();
    

  }else {
    $(".artist_bio").append(full_name + " has established " + gender1 + " as an in-demand " + instrument + ", recording and touring with a veritable \"who's who\" of jazz. " 
      + last_name + "'s " + generateASoundAdjective(instrument) + " sound and " + generateAnImprovisationAdjective(Math.random()) + " improvisation have garnered " + accliamOrPraise(Math.random()) + " from critics and fans alike. " 
      + gender2 + " debut album, \"" + firstTitle + " " + secondTitle + ",\" established the " + instrument + " as an up-and-coming " + generateYoungLion(instrument,Math.random()) + " with chops to spare, displaying a sure sense of swing and fine instinct for restraint.", "<br><br>", "In addition to " + gender2.toLowerCase() + " work as a leader, " + first_name + " collaborates frequently with " + collaborator1 + ", " + collaborator2 + ", and " + collaborator3 + ". " +gender3+ " performs regularly in the greater " + workplace_city + " area with " + gender2.toLowerCase() + " " + jazzStyle + " " + instrumentation +", among other projects.  " + gender3 + " is currently working on a " + favoriteJazzMusician + " tribute album to be released in the " + season + " of " + generateDate() + "." + "<button class='btn-primary refresh'>Create Another Biography</button>");
    $(".create_bio").hide();
    
  }

})

$(document).on("click",".refresh", function(){ //this handy dandy selection (document).on is useful for selecting elements that have been inserted with jQuery
  location.reload(true);
})
