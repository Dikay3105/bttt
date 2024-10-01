import ActivityCard from "./CardComponent/ActivityCard";
import './ActivityProgress.scss'
import WelcomeCard from "./CardComponent/WelcomeCard";
import ProgressCard from "./CardComponent/ProgressCard";

const ActivityProgress = () => {
    return (
        <div className="activity-progress-container container-xl px-4 mt-n10">
            <div className="row">
                <div className="col-xxl-4 col-xl-12 mb-4">
                    <WelcomeCard />
                </div>
                <div className="col-xxl-4 col-xl-12 mb-4">
                    <ActivityCard />
                </div>
                <div className="col-xxl-4 col-xl-12 mb-4">
                    <ProgressCard />
                </div>
            </div>
        </div>
    );
}

export default ActivityProgress;