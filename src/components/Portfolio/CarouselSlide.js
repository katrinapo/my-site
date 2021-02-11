import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

export default function CarouselSlide(props) {
    const { backgroundColor, title, text, image,liveLink,codeLink} = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 7,
            padding: '2em 2em 2em 2em',
            margin: '1em',
            maxWidth: '80vw',
            maxHeight: '60vh',
            fontSize: '2vh',
            boxShadow: '20px 20px 20px black',
            display: 'inline-block',
            justifyContent: 'center',
            alignContent: 'center'
        }
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <h2 f5 f5-m f5-l fw2 black-50 mt0 pt2 lh-copy>{title}</h2>
            <p>{text}</p>
            <img className="portfolioImg" src={`https://i.ibb.co/${image}.png`}/>
            <p><a target="_blank" href={liveLink}>View Live</a> | <a target="_blank" href={codeLink}>View Code</a></p>
        </Card>
    );
}