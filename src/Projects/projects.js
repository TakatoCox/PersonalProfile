import React from 'react';
import { Link } from 'react-router-dom';
import "./projects.css"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Projects = () => {
    return ( 
        <div className="projectsBackground">
            <div className="buttonContainer">
                <div className="titleP">Projects</div>
                <Link to="/PersonalProfile">
                    <button className="exit">X</button>
                </Link>
            </div>
            <div className="projectsContainer">
                {/*project*/}
                <Card className="project">
                    <CardActionArea>
                        <a href="https://pickup-ranking.herokuapp.com/">
                        <img alt="Pickup Hockey Ranking" src={require("./pickupGif.gif")} className="gif"/>
                        </a>
                    </CardActionArea>

                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Pickup Ranking
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Full stack website for my Monday night pickup hockey league.
                        Keeps track of standings and stats of players/goalies
                    </Typography>
                    </CardContent>
                    
                    <CardActions style={{marginTop:"-20px"}}>
                        <Button href="https://pickup-ranking.herokuapp.com/" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Live
                        </Button>
                        <Button href="https://github.com/TakatoCox/PickupRanking" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Source Code
                        </Button>
                    </CardActions>
                </Card>

                {/*project*/}
                <Card className="project">
                    <CardActionArea>
                        <a href="https://takatocox.github.io/SortingVisual/">
                       <img alt="sorting algorithm visualizer" src={require("./gifSorting.gif")} className="gif"/>
                       </a>
                    </CardActionArea>

                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Sorting Visualizer
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Observe the visual representation of various sorting algorithms.
                        Choose an array size and a sorting algorithm, then watch the list get sorted.<br/> (HTML,CSS,JavaScript)
                    </Typography>
                    </CardContent>
                    
                    <CardActions style={{marginTop:"-20px"}}>
                        <Button href="https://takatocox.github.io/SortingVisual/" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Live
                        </Button>
                        <Button href="https://github.com/TakatoCox/SortingVisual" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Source Code
                        </Button>
                    </CardActions>
                </Card>

                {/*project*/}
                <Card className="project">
                    <CardActionArea>
                        <a href="https://takatocox.github.io/ReactRecipes">
                       <img alt="sorting algorithm visualizer" src={require("./gifRecipes.gif")} className="recipeGif"/>
                       </a>
                    </CardActionArea>

                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Recipe App
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Save your favorite recipes with this user friendly recipes app! 
                        Create, delete, and edit multiple recipes. <br/><br/> (HTML,CSS,JavaScript,React)
                    </Typography>
                    </CardContent>
                    
                    <CardActions style={{marginTop:"-20px"}}>
                        <Button href="https://takatocox.github.io/ReactRecipes/" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Live
                        </Button>
                        <Button href="https://github.com/TakatoCox/ReactRecipes/tree/master" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Source Code
                        </Button>
                    </CardActions>
                </Card>

                {/*project*/}
                <Card className="project">
                    <CardActionArea>
                       <a href="https://takatocox.github.io/ReactFamilyCards/">
                       <img alt="sorting algorithm visualizer" src={require("./gifFamily.gif")} className="gif"/>
                       </a>
                    </CardActionArea>
                    <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Family Cards
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Fetches weather data from OpenWeather API and keeps track of my family member location, weather, and time.<br/>
                        <br/> (HTML,CSS,JavaScript,React)
                    </Typography>
                    </CardContent>
                    
                    <CardActions style={{marginTop:"-20px"}}>
                        <Button href="https://takatocox.github.io/ReactFamilyCards/" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Live
                        </Button>
                        <Button href="https://github.com/TakatoCox/ReactFamilyCards/tree/master" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Source Code
                        </Button>
                    </CardActions>
                </Card>

                {/*project*/}
                <Card className="project">
                    <CardActionArea>
                       <a href="https://takatocox.github.io/HockeyShop/">
                       <img alt="Hockey Shop" src={require("./gifHockeyShop.gif")} className="gif"/>
                       </a>
                    </CardActionArea>
                    <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        Hockey Shop
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Oniline ice hockey retail shop. Able to add and remove items from the cart, and also 'checkout' at the end.<br/>
                        <br/> (HTML,CSS,JavaScript,React)
                    </Typography>
                    </CardContent>
                    
                    <CardActions style={{marginTop:"-20px"}}>
                        <Button href="https://takatocox.github.io/HockeyShop/" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Live
                        </Button>
                        <Button href="https://github.com/TakatoCox/HockeyShop/tree/master" size="small" style={{backgroundColor:"rgb(233, 78, 78)", color:"white"}}>
                        Source Code
                        </Button>
                    </CardActions>
                </Card>
            </div>
        
        </div>
     );
}
 
export default Projects;
