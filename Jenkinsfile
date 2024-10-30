pipeline {
  agent any
  stages {
    stage('Aqua scanner') {
      agent {
        docker {
          image 'aquasec/aqua-scanner'
          registryUrl 'https://registry.aquasec.com'
          registryCredentialsId 'TRIVY_CREDENTIALS' // Ensure these credentials are defined in Jenkins
        }
      } 
      steps {
        withCredentials([
          string(credentialsId: 'AQUA_KEY', variable: 'AQUA_KEY'),
          string(credentialsId: 'AQUA_SECRET', variable: 'AQUA_SECRET'),
          string(credentialsId: 'GITHUB_TOKEN', variable: 'GITHUB_TOKEN'),
          string(credentialsId: 'TRIVY_USERNAME', variable: 'TRIVY_USERNAME'),
          string(credentialsId: 'TRIVY_PASSWORD', variable: 'TRIVY_PASSWORD')
        ]) {
          sh '''
            export TRIVY_RUN_AS_PLUGIN=aqua
            export AQUA_URL=https://api.supply-chain.cloud.aquasec.com
            export CSPM_URL=https://api.cloudsploit.com
            export TRIVY_USERNAME="${TRIVY_USERNAME}"
            export TRIVY_PASSWORD="${TRIVY_PASSWORD}"
            export TRIVY_DB_REPOSITORY="registry.aquasec.com/trivy-db:2"
            export TRIVY_JAVA_DB_REPOSITORY="registry.aquasec.com/trivy-java-db:1"
            export TRIVY_CHECKS_BUNDLE_REPOSITORY="registry.aquasec.com/trivy-checks:1"
            
            trivy fs --scanners misconfig,vuln,secret --sast . 
          '''
        }
      }
    }
  }
}
