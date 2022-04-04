import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='qna'>
            <h2 className='qna-header'>Questions & Answers</h2>
            <ul>
                <li>
                    <h3>Inline vs Block vs Inline-Block</h3>
                    <p>
                        On Inline element, height,width,margin,padding properties does not apply.It takes only the necessary space it needs to adjust it data. It doesn't start with a new line.
                    </p>
                    <p>
                        On Block element, height,width,margin,padding properties are applicable. Block element takes the full width of its parent component.Each Block element starts with a new line.
                    </p>
                    <p>
                        Inline-Block element acts as an inline element. It doesn't start with a new line, doesn't take the whole width and height,width,margin,padding properties can also be applied on Inline-Block element.
                    </p>

                </li>
                <li>
                    <h3>What is Semantic tags</h3>
                    <p>
                        Semantic Tags are introduced in HTML5. These tag's name itself describes whats the tags are holding inside itself. Which makes the HTML code more meaningful to the website and to the developer.For example, 'nav' tag clearly indicates it's holding the navbar of the website. 'header' & 'footer' tags holding the header section and footer section of the website respectively.
                    </p>
                </li>
                <li>
                    <h3>What is Context API?</h3>
                    <p>
                        Context API is a functionality of React which enables us to solve the problem of prop-drilling.It is also an easier approach to state management using Redux.
                    </p>
                </li>
            </ul>

        </div>
    );
};

export default Blogs;