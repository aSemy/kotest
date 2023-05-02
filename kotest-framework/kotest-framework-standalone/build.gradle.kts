plugins {
   `java-library`
   id("kotest-jvm-conventions")
   application
   alias(libs.plugins.shadowjar)
}

kotlin {
   jvm()
}

application {
   mainClass.set("io.kotest.engine.launcher.MainKt")
}

tasks {
   jar {
      archiveClassifier.set("default")
   }
   shadowJar {
      archiveClassifier.set(null as String?)
      archiveBaseName.set("kotest-framework-standalone-jvm")
      exclude("**/module-info.class")
      mergeServiceFiles()
      manifest {
         attributes(Pair("Main-Class", "io.kotest.engine.launcher.MainKt"))
      }
   }
   getByName("jvmJar") {
      finalizedBy(getByName("shadowJar"))
   }
}

tasks.startScripts { dependsOn(tasks.shadowJar) }
tasks.distZip { dependsOn(tasks.shadowJar) }
tasks.distTar { dependsOn(tasks.shadowJar) }

dependencies {
   implementation(kotlin("reflect"))
   implementation(projects.kotestFramework.kotestFrameworkEngine)
}
