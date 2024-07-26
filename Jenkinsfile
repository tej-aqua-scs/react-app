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
          usernamePassword(credentialsId: 'PROVIDER_CREDENTIALS', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')
        ]){
          sh '''
            export TRIVY_RUN_AS_PLUGIN=aqua
            export AQUA_URL=https://api.supply-chain.cloud.aquasec.com
            export CSPM_URL=https://api.cloudsploit.com
            export IGNORE_PANIC="true"
            ls -al
            trivy fs --scanners misconfig,vuln,secret .
            # To customize which severities to scan for, add the following flag: --severity UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL
            # To enable SAST scanning, add: --sast
            # To enable reachability scanning, add: --reachability
            # To enable npm/dotnet/gradle non-lock file scanning, add: --package-json / --dotnet-proj / --gradle
            # For http/https proxy configuration add env vars: HTTP_PROXY/HTTPS_PROXY, CA-CRET (path to CA certificate)
          '''
        }
      }
    }
  }
}
