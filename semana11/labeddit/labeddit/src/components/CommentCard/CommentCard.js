import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ImArrowDown, ImArrowUp } from 'react-icons/im'
import { voteCommentUp, voteCommentDown, deleteCommentVote } from '../../services/posts';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

});

const CommentCard = (props) => {
    const classes = useStyles();

    const voteUp = (id) => {
        if (props.userVote) {
            deleteCommentVote(id)
        } else {
            voteCommentUp(id)
        }
    }

    const voteDown = (id) => {
        if (props.userVote) {
            deleteCommentVote(id)
        } else {
            voteCommentDown(id)
        }
    }

    return (
        <Card className={classes.root} onClick={props.onClick} >
            <CardContent>

                <ImArrowUp onClick={()=> voteUp(props.id)}/>
                <Typography variant="h5" component="h2">
                    {props.voteSum ? props.voteSum : "0"}
                </Typography>
                <ImArrowDown onClick={()=> voteDown(props.id)} />

                <Typography variant="body2" component="p">
                    {props.body}

                </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}

export default CommentCard
