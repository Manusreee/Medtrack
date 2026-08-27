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
                bat '"C:\\Users\\Manasvi\\AppData\\Local\\Programs\\Python\\Python312\\python.exe" --version'
                bat 'if exist Backend\\main.py (echo Backend OK) else (exit /b 1)'
                bat 'if exist Backend\\requirements.txt (echo Requirements OK) else (exit /b 1)'
            }
        }

        stage('Frontend Check') {
            steps {
                 bat '"C:\\Program Files\\nodejs\\node.exe" --version'
                 bat '"C:\\Program Files\\nodejs\\npm.cmd" --version'
                 bat 'cd Frontend && "C:\\Program Files\\nodejs\\npm.cmd" ci'
                 bat 'cd Frontend && "C:\\Program Files\\nodejs\\npm.cmd" run build'
            }
        }

        stage('Build Success') {
            steps {
                echo 'MedTrack CI pipeline completed successfully!'
            }
        }
    }
}