import companies from './cv-data';
import WorkPlace from './work-place/work-place';

function WorkPlaces () {
    return (
        <>
            {companies.map(item => <WorkPlace key={item.company} {...item} />)}
        </>
    )
}

export default WorkPlaces;