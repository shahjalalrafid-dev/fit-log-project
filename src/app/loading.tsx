import React from 'react'

const loading = () => {
    return (
        <div className='text-center'>
            <h4 className='text-2xl font-oswald'>Loading Workouts...</h4>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>


        </div>
    )
}

export default loading