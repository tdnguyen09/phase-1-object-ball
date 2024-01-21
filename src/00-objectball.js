function gameObject(){
    let gameObj = {
        home: {
            teamName:"Brooklyn Nets",
            colors:["black", "white"],
            players:{
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },	
                "Mason Plumlee": {
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                },

            },
        },
        away:{
            teamName: "Charlotte Hornets",
            colors: ["turquoise", "purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },	
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },	
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },	
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                },	
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                },
            },
        },
    };
    return gameObj;
};
console.log(gameObject());


function homeTeamName(){
    return gameObject()["home"]["teamName"];
}
console.log(homeTeamName());


const playerInfo= {...gameObject().home.players, ...gameObject().away.players};
console.log (playerInfo);


function numPointdScored (playerName){
    return playerInfo[playerName]["points"];
}
console.log(numPointdScored("Brendan Haywood"));


function shoeSize(playerName){
    return playerInfo[playerName]["shoe"];
}
console.log(shoeSize("Brendan Haywood"));


function teamColors(teamName){
    if(teamName === "Brooklyn Nets"){
        return gameObject().home.colors;
    } else if (teamName === "Charlotte Hornets"){
        return gameObject().away.colors;
    }  
}
console.log (teamColors("Brooklyn Nets"));

function teamNames(){
    let nameOfTeam = [gameObject().home.teamName, gameObject().away.teamName];
    return nameOfTeam;
}
console.log(teamNames())

function playerNumbers(teamName){ 
    let resultArr = [];
    if(teamName === "Brooklyn Nets"){
        let homePlayerInfo = gameObject()["home"]["players"];
        for (const key in homePlayerInfo){
            resultArr.push(homePlayerInfo[key]["number"]);
        }
            return resultArr;
    }else if (teamName === "Charlotte Hornets"){
        let awayPlayerInfo = gameObject()["away"]["players"]
        for (const key in awayPlayerInfo){
            resultArr.push(awayPlayerInfo[key]["number"]);
        }      
    } 
}  
console.log(playerNumbers("Brooklyn Nets"));


function playerStats(playerName){
    return playerInfo[playerName];
}
console.log(playerStats("Brendan Haywood"));


function bigShoeRebounds(){
    let bigShoe = 0;
    let playerName = "";
    let reboundNumber = "";
    for (let player in gameObject().home.players){
        if (gameObject().home.players[player].shoe > bigShoe){
            bigShoe = gameObject().home.players[player].shoe;
            playerName = player;
            reboundNumber = gameObject().home.players[player].rebounds;
        }
    } 
    for (let player in gameObject().away.players){
        if (gameObject().away.players[player].shoe >bigShoe){
            bigShoe = gameObject().away.players[player].shoe ;
            playerName = player;
            reboundNumber = gameObject().away.players[player].rebounds;
        }
    }
    return `${playerName} has largest shoe size and his rebound is ${reboundNumber}`
}
console.log(bigShoeRebounds());


function mostPointsScored(){
    let pointsScored = 0;
    let playerName = "";
    for (let player in gameObject().home.players){
        if ( gameObject().home.players[player].points > pointsScored){
            pointsScored = gameObject().home.players[player].points;
            playerName = player;
        }
    }
    for (let player in gameObject().away.players){
        if (gameObject().away.players[player].points > pointsScored){
            pointsScored = gameObject().away.players[player].points;
            playerName = player;
        }
    }
    return `${playerName} has most points which is ${pointsScored}`;
}
console.log(mostPointsScored());

//Array contains points of 2 teams
let HomePoint = () => {
    let resultArr = [];
    for (let player in gameObject().home.players){
        resultArr.push(gameObject().home.players[player].points);
    }
    return resultArr;
}
let arrHomePoint = HomePoint();

let AwayPoint = () => {
    let resultArr = [];
    for (let player in gameObject().away.players){
        resultArr.push(gameObject().away.players[player].points);
    }
    return resultArr;
}
let arrAwayPoint = AwayPoint();
//sumpoint of 2 teams
let sumHome = () => {
    let sum = 0
    for ( let element in arrHomePoint){
        sum += arrHomePoint[element]
    }
    return sum 
}
let sumHomePoints = sumHome();
let sumAway = () => {
    let sum = 0
    for ( let element in arrAwayPoint){
        sum += arrAwayPoint[element]
    }
    return sum 
}
let sumAwayPoints = sumAway();
//function compare
function winningTeam(){
    let winTeam = "";
    let totalPoints = "";
    if (sumHomePoints > sumAwayPoints){
        winTeam = gameObject().home.teamName;
        totalPoints = sumHomePoints;
    }else{
        winTeam = gameObject().away.teamName;
        totalPoints = sumAwayPoints;
    }
    return `winning team is ${winTeam} with ${totalPoints} points` ;
}
console.log(winningTeam())


function playerWithLongestName(){
    let longestName = "";
    for (let player in gameObject().home.players){
        if (player.length > longestName.length){
            longestName = player;
        }
    }
    for (let player in gameObject().away.players){
        if (player.length > longestName.length){
            longestName = player;
        }
    }
    return `${longestName} is player with longest name`
}
console.log(playerWithLongestName());