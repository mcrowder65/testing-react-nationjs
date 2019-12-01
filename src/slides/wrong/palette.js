import React from "react";
import { Container } from "../../reusable/container";
import { getPrimaryColor } from "../../redux/selectors";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { SwatchesPicker } from "react-color";
import * as actions from "../../redux/actions";
import { Button } from "../../reusable/button";
import { Text } from "../../reusable/text";

export class Palette extends React.Component {
  state = {
    swatchColor: this.props.primaryColor
  };
  setSwatchColor = ({ hex }) => {
    this.setState({ swatchColor: hex });
  };
  render() {
    const { swatchColor } = this.state;
    const { updateThemeColor } = this.props;
    return (
      <Container>
        <Text>
          <FormattedMessage id="real-world.swatch.label" />
        </Text>
        <SwatchesPicker color={swatchColor} onChange={this.setSwatchColor} />
        <Button
          id="update-primary-color"
          onClick={() => updateThemeColor(swatchColor)}
        >
          <FormattedMessage id="real-world.submit" />
        </Button>
        <Text>
          <a
            href="https://github.com/mcrowder65/testing-react-nationjs/blob/master/src/slides/wrong/palette.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="real-world.source" />
          </a>
        </Text>
        <Text>
          <a
            href="https://github.com/mcrowder65/testing-react-nationjs/blob/master/src/slides/wrong/__tests__/palette.test.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="real-world.test" />
          </a>
        </Text>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    primaryColor: getPrimaryColor(state)
  };
};

const mapDispatchToProps = {
  updateThemeColor: actions.updateThemeColor
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Palette);
