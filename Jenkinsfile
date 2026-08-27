pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Backend Check') {
            steps {
                bat 'python --version'
                bat 'if exist Backend\\main.py (echo Backend OK) else (exit /b 1)'
                bat 'if exist Backend\\requirements.txt (echo Requirements OK) else (exit /b 1)'
            }
        }

        stage('Frontend Check') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'if exist Frontend\\package.json (echo Frontend OK) else (exit /b 1)'
            }
        }

        stage('Build Success') {
            steps {
                echo 'MedTrack CI pipeline completed successfully!'
            }
        }
    }
}