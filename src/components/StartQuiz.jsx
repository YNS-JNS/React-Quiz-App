// Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// export default function StartQuiz({ onStartQuiz }) {
export default function StartQuiz() {

    // State to store the selected category
    const [selectedCategory, setSelectedCategory] = useState('');

    // Function to handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log(selectedCategory)
    };

    // Example data
    const categories = ['Fullstack', 'Frontend', 'Backend'];

    return (
        <div className='wrapped-section'>
            <div className='home-section'>
                <h1>Welcome to the Quiz App!</h1>
                {/* <label>
                    Name:
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    Sector:
                    <input type="text" value={userSector} onChange={(e) => setUserSector(e.target.value)} />
                </label> */}
                <div>
                    <h1>Select Category</h1>
                    {categories.map((category, index) => (
                        <div key={index} onClick={() => handleCategorySelect(category)}>
                            {category}
                        </div>
                    ))}
                    <p>Selected Category: {selectedCategory}</p>
                </div>

                <Link to={`/startquiz/quiz/${selectedCategory}`} >
                    {/* <button onClick={handleStartQuiz}>Start Quiz</button> */}
                    <button>Start Quiz</button>
                </Link>
            </div>
        </div>
    );
}
