import React from 'react'
import FormikForms from '../components/FormikForms'
import Forms from '../components/Forms'

const Home = () => {
    return (
        <React.Fragment>
            <div className="w-[800px] max-w-[1440px] mx-auto mt-4">
                {/* <Forms /> */}
                <FormikForms />
            </div>
        </React.Fragment>
    )
}

export default Home