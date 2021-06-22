import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import { votePostUp, votePostDown, deletePostVote } from '../../services/posts';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

});

export default function PostCard(props) {
    const classes = useStyles();

    const voteUp = (id) => {
        if (props.userVote) {
            deletePostVote(id)
        } else {
            votePostUp(id)
        }
    }

    const voteDown = (id) => {
        if (props.userVote) {
            deletePostVote(id)
        } else {
            votePostDown(id)
        }
    }

    return (
        <Card className={classes.root} >
            <CardContent onClick={props.onClick}>

                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>


                <Typography variant="body2" component="p">
                    {props.body}

                </Typography>

            </CardContent>

            <CardActions>
                <ImArrowUp onClick={() => voteUp(props.id)} />
                <Typography variant="body2" component="p">
                    {props.voteSum ? props.voteSum : "0"}
                </Typography>
                <ImArrowDown onClick={() => voteDown(props.id)} />

                <Typography variant="body2" component="p">
                    {props.commentCount ? props.commentCount : "0"} Comentários
                </Typography>


            </CardActions>
        </Card>
    );
}