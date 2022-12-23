import React from "react";
import Card from "@material-ui/core/Card";
import './Newstyle.css';
/* import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions"; */
  
export default function News() {
  return (
    <div style={{}}>
     <h4 className="title" style={{marginTop: "40px", display: "grid", marginLeft: "30px;"}}>TITULO</h4>
      <Card className="primary" style={{ width: "100%", height:600, backgroundColor: "black", msFlexDirection: "column", display: "flex"}} >
       
          <section class="container">
            <article id="n-p">
                <button className="button1" id="s1">+</button>
            </article>

            <article id="n-p">
                <button className="button1" id="s2">+</button>
            </article>

            <article id="n-p">
                <button className="button1" id="s3">+</button>
            </article>

          </section>
     
        {/* <CardContent>

          <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
            buen dia
            </Typography>
              <Typography variant="h5" component="h2">
              como estas?
              </Typography>
            <Typography style={{ marginBottom: 12,}} color="textSecondary">
            Keep Motivated
          </Typography>

            <Typography variant="body2" component="p">
              Stay Happy
            </Typography>

        </CardContent>

          <CardActions>
            <Button size="small" style={{background: "Orange", border: "6"}}>Get Start</Button>
          </CardActions> */}

      </Card>
    </div>
  );
}