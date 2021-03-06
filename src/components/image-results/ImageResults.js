import React, { Component } from 'react';
import { GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import GridTile from 'material-ui/GridList/GridTile';



class ImageResults extends Component {
    state={
        open: false,
        currentImg: ''
    }

    handleOpen = img => {
        this.setState({open: true, currentImg: img});
    }

    handleClose = () => {
        this.setState({ open: false});
    }
    render() {
        let imageListContent;
        const { images} = this.props;

        if (images){
            imageListContent = (
                <GridList col = {3}>
                    {images.map(img => (
                        <GridTile
                            title={img.tags}
                            key = {img.id}
                            subtitle={
                                <span>
                                    by<strong> {img.user}</strong>
                                </span>
                            }
                            actionIcon={
                                <IconButton onClick= {() => this.handleOpen(img.largeImageURL)}>
                                    <ZoomInIcon color="white"/>
                                </IconButton>
                            }
                        >
                            <img src={img.largeImageURL} alt=""/>
                        </GridTile>
                    ))}
                </GridList>
            )
        } else{
            imageListContent = null;
        }

        const actions = [
            <FlatButton label= "close" primary={true} onClick={this.handleClose}/>
        ]
        return (
            <div>
              {imageListContent}  
              <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                <img src={this.state.currentImg} alt="" style={{ width: '100%' }}/>    
            </Dialog>  
            </div>
        )
    }
}


export default ImageResults;