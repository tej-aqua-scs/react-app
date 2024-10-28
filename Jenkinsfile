pipeline {
  agent any
  stages {
    stage('Aqua scanner') {
     agent {
        docker {
          image 'aquasec/aqua-scanner'
        }
      } 
      steps {
        withCredentials([
          string(credentialsId: 'AQUA_KEY', variable: 'AQUA_KEY'),
          string(credentialsId: 'AQUA_SECRET', variable: 'AQUA_SECRET'),
          string(credentialsId: 'GITHUB_TOKEN', variable: 'GITHUB_TOKEN')
        ]){
          sh '''
            export TRIVY_RUN_AS_PLUGIN=aqua
            export AQUA_URL=https://api.supply-chain.cloud.aquasec.com
            export CSPM_URL=https://api.cloudsploit.com
            export TRIVY_USERNAME=teja.chittamuri@aquasec.com
            export TRIVY_PASSWORD=Jesus@saves2001
            export TRIVY_DB_REPOSITORY="registry.aquasec.com/trivy-db:2"
            export TRIVY_JAVA_DB_REPOSITORY="registry.aquasec.com/trivy-java-db:1"
            export TRIVY_CHECKS_BUNDLE_REPOSITORY="registry.aquasec.com/trivy-checks:1"
            TRIVY_USERNAME=$TRIVY_USERNAME TRIVY_PASSOWRD=$TRIVY_PASSWORD trivy --cache-dir /tmp/trivy fs --scanners misconfig,vuln,secret --sast TRIVY_DB_REPOSITORY="registry.aquasec.com/trivy-db:2 TRIVY_CHECKS_BUNDLE_REPOSITORY="registry.aquasec.com/trivy-checks:1 .
          '''
        }
      }
    }
  }
}
