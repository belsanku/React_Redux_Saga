import {useDispatch} from "react-redux";
import {createArticleAction} from "../../ducks/article/actions";
import {useRef} from "react";
import {Button} from "reactstrap";

const divStyle = {
    textAlign: 'center',
    margin: 'auto',
    boxSizing: 'border-box',
    padding: '20px'
};

export function ArticleCreateNewComponent(props) {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const imgRef = useRef(null);

    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(createArticleAction({
            title: titleRef.current.value,
            content: contentRef.current.value,
            imageUrl: imgRef.current.value
        }));
    }

    return (
        <div style={divStyle}>
            <form onSubmit={onSubmitHandler} id={Date.now()}>
                <p><b>Title:</b><br/>
                    <input type='text' ref={titleRef} size='40'/>
                </p>

                <p><b>Content:</b><br/>
                    <textarea cols='80' ref={contentRef} rows='3'/>
                </p>

                <p><b>Image URL:</b><br/>
                    <input type='text' size='80' ref={imgRef}/>
                </p>
                <Button type={'submit'} className='btn-danger'>Add new article!</Button>
            </form>
        </div>
    );
}