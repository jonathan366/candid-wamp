import * as React from "react";
import './PostForm.css';

const CATEGORIES = [
    'other', 'entertainment', 'sports', 'news', 'games', 'technology', 'memes'
]

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function PostForm(props) {

    // Form data variables
    const [category, setCategory] = React.useState('other');
    const [title, setTitle] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [description, setDescription] = React.useState('')

    // Error tracking variable
    const [error, setError] = React.useState(null);

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const urlHandler = (e) => {
        setUrl(e.target.value);
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        setError(null);

        // Form validation
        if (title.trim().length > 0 && description.trim().length > 0 && url.trim().length > 0 && CATEGORIES.includes(category)) {
            const data = { title, description, url, category }
            console.log(data);

            // Mine
            props.onFormSubmit(data);

        }
        else {
            setError('Please enter valid inputs!');
            return;
        }
    }

    const cancelHandler = () => {
        props.onCancel();
    }

    return (
        <React.Fragment>
            <div className='form-container'>
                <h2>Create a Post</h2>
                <form onSubmit={formSubmitHandler}>
                    <div className='form-control'>
                        <label htmlFor='category'>Category</label>
                        <select name='category' id='category' onChange={categoryHandler} value={category}>
                            {CATEGORIES.map(cat => <option key={cat} value={cat}>{capitalizeFirstLetter(cat)}</option>)}
                        </select>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' name='title' required onChange={titleHandler} value={title}></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='url'>URL</label>
                        <input type='url' name='url' required onChange={urlHandler} value={url}></input>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='description'>Description</label>
                        <textarea name='description' required onChange={descriptionHandler} value={description} />
                    </div>
                    {error && <p className='error-message'>{error}</p>}
                    <div className='button-container'>
                        <button className='submitBtn' type='submit'>Submit</button>
                        <button className='cancelBtn' onClick={cancelHandler}>Cancel</button>
                    </div>

                </form>
            </div>
        </React.Fragment>
    );
}

export default PostForm;