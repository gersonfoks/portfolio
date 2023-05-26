import {Project} from "@/data/Project";


const projects: Project[] = [
    new Project(
        "Ai-for-Elephants: Gunshots and Elephant Rumbles Detection",
        "Using transformer models to detect gunshots and elephant rumbles in audio files.",
        "./projects/AiForElephants/main.jpg",
        "projects/ai-for-elephants"
        ),
    new Project(
        "AI-for-Health: Preterm Baby Development and Light Exposure",
        "Determining the effect of light exposure on preterm baby development.",
        "./projects/AiForPretermBabies/preterm_baby.jpg",
        "projects/ai-for-preterm-babies"
        ),
    new Project(
        "AI-for-Health: Heart Failures Prediction from ECG",
        "Building a neural model that can detect indications of future heart failures from ECG scans.",
        "./projects/AiForHeartFailureDetection/ecg.png",
        "projects/ai-for-heart-failure-detection"
        ),

    // new Project(
    //     "AI-against-poachers: Autonomous Flying Drones for Wildlife Protection",
    //     "Exploring simulation environments for training autonomous flying drones to protect wildlife.",
    //     "./work_in_progress.png",
    //     "projects/ai-for-elephants"
    //     )
]

export default projects;
