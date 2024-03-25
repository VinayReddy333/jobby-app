import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobItem = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="container">
        <div className="container2">
          <div className="img-title-container">
            <img className="img" src={companyLogoUrl} alt="company logo" />
            <div className="title-rating-container">
              <h1 className="heading">{title}</h1>
              <div className="rating-container">
                <AiFillStar className="star" />
                <p className="para">{rating}</p>
              </div>
            </div>
          </div>
          <div className="package-container">
            <div className="lacation-container">
              <div className="location-icon-location-container">
                <MdLocationOn className="location" />
                <p className="location">{location}</p>
              </div>
              <div className="">
                <p className="job">{employmentType}</p>
              </div>
            </div>
            <div>
              <p className="package">{packagePerAnnum}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="second-part-container">
          <h1 className="description-heading">Description</h1>
          <p className="description-para">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobItem
