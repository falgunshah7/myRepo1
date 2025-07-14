pipeline {
    agent any

    triggers {
        // GitHub webhook or polling for PRs
        githubPullRequest()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            junit 'jest-junit.xml' // optional if using jest-junit
        }
        failure {
            echo 'Tests failed.'
        }
        success {
            echo 'All tests passed!'
        }
    }
}
