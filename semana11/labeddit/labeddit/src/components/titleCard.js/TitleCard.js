import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { StyledCard, RedArrowHover, GreenArrowHover } from "./styled"
import CardActions from '@material-ui/core/CardActions';
import { votePostUp, votePostDown, deletePostVote } from '../../services/posts';
import { ImArrowDown, ImArrowUp } from 'react-icons/im'

const TitleCard = (props) => {

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

    console.log(props)
    return (
        <StyledCard >

            <CardActions>
                <GreenArrowHover>
                    <ImArrowUp onClick={() => voteUp(props.id)} />
                </GreenArrowHover>

                <Typography variant="body2" component="p">
                    {props.voteSum ? props.voteSum : "0"}
                </Typography>

                <RedArrowHover>
                    <ImArrowDown onClick={() => voteDown(props.id)} />
                </RedArrowHover>
            </CardActions>

            <CardContent>

                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>

                <Typography variant="body2" component="p">
                    {props.body}

                </Typography>
            </CardContent>

        </StyledCard>
    );
}

export default TitleCard
