import {Pagination, PaginationItem} from '@material-ui/lab'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';
import { useEffect } from 'react';

import useStyles from './styles';

const Paginate = ({ page }) => {

  
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
      if (page) {
        console.log('getPage')
        dispatch(getPosts(page));
      }
    }, [dispatch, page]);

  
    return (
      <Pagination
        classes={{ ul: classes.ul }}
        count={5}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
        )}
      />
    );
  };
 
export default Paginate;