plugins {
   id("kotest-multiplatform-library-conventions")
}

kotlin {
   sourceSets {

      commonMain {
         dependencies {
            // this is api because we want to expose `shouldBe` etc
            api(projects.kotestAssertions.kotestAssertionsShared)

            implementation(kotlin("reflect"))
            implementation(projects.kotestCommon)
            implementation(projects.kotestAssertions.kotestAssertionsApi)
            implementation(libs.kotlinx.coroutines.core)
         }
      }

      jvmMain {
         dependencies {
            implementation(libs.kotlinx.coroutines.jdk8)
         }
      }

      jvmTest {
         dependencies {
            implementation(projects.kotestProperty)
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.opentest4j)
            implementation(libs.apache.commons.lang)
            implementation(libs.mockk)
         }
      }
   }
}
