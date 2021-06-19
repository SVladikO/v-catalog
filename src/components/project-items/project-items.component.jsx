import React from "react";
import './project-items.style.scss';

function ProjectItems() {
    return (
        <div className="project_items_container">
            <div className="project_item">
                <div className='item_overview'>overview</div>
                <div className='item_project_name'>ProjectName</div>
                <div className="description">description descri ption descrip tion des cription descr ipt ion</div>
                <a className='github_link'>github</a>
            </div>
            <div className="project_item">
                <div className='item_overview'>overview</div>
                <div className='item_project_name'>ProjectName</div>
                <div className="description">description descri ption descrip tion des cription descr ipt ion</div>
                <a className='github_link'>github</a>
            </div>


        </div>
    )
}

export default ProjectItems;