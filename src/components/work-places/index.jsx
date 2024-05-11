import companies from './cv-data';
import Company from './company';

function WorkPlaces () {
    return (
        <>
            {companies.map(item => <Company key={item.company} {...item} />)}
        </>
    )
}

export default WorkPlaces;