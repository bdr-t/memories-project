import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./style";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <>
      {!posts.length && <CircularProgress />}
      {posts.length && (
        <Grid
          className={classes.container}
          container
          alignItems="streach"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
