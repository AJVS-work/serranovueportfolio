<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <h2 class="mb-4">My Projects</h2>
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="card h-100">
            <img
              :src="project.image"
              class="card-img-top project-image"
              :alt="`Project ${project.id} image`"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text flex-grow-1">{{ project.description }}</p>
              <p class="stack-text">
                <strong>Stack:</strong> {{ project.stack.join(", ") }}
              </p>
              <!-- You can add buttons or links here if needed -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import tributeImage from "../assets/tribute.jpg";
import surveyImage from "../assets/survey.png";
import seethroughsImage from "../assets/seethroughs.png";
import portfolioImage from "../assets/portfolio.png";
import shopImage from "../assets/shop.png";
import calcImage from "../assets/calc.png";

export default {
  components: { Navbar },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Svnflower Tribute",
          description: "A tribute project for a freecodecamp course.",
          stack: ["HTML", "CSS", "JavaScript"],
          image: tributeImage,
        },
        {
          id: 2,
          title: "Survey Form",
          description: "A survey form made for a freecodecamp course.",
          stack: ["HTML", "CSS", "JavaScript"],
          image: surveyImage,
        },
        {
          id: 3,
          title: "See-Throughs App",
          description:
            "An app for our thesis that utilizes a machine learning model to detect calamansi leaf diseases, to be deployed on a Raspberry Pi 4 Model B.",
          stack: ["Python", "Kivy, OpenCV"],
          image: seethroughsImage,
        },
        {
          id: 4,
          title: "Mini-Portfolio",
          description:
            "A mini portfolio made for our previous Web and Mobile Systems subject.",
          stack: ["HTML", "CSS", "JavaScript"],
          image: portfolioImage,
        },
        {
          id: 5,
          title: "Jake's Coffee Shop",
          description:
            "A simple coffee shop static webpage made for our previous Web and Mobile Systems subject.",
          stack: ["HTML", "CSS", "JavaScript"],
          image: shopImage,
        },
        {
          id: 6,
          title: "Calculator",
          description:
            "A working calculator app made for our previous Web and Mobile Systems subject.",
          stack: ["HTML", "CSS", "JavaScript"],
          image: calcImage,
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card {
  height: 100%;
}

.stack-text {
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.75rem;
}
</style>
