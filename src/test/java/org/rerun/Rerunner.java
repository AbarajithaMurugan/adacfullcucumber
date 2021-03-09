package org.rerun;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"@target\\fail.txt"},monochrome=true,glue="com.step",
plugin= {"pretty"
,"rerun:target\\fail.txt"

})
public class Rerunner {

}
